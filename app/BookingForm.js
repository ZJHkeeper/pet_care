"use client";

import { useState } from "react";

const initialForm = {
  customerName: "",
  customerPhone: "",
  petType: "小型犬",
  serviceType: "基础沐浴",
  appointmentAt: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitBooking = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "提交失败，请稍后再试。");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "预约提交成功，我们会在 30 分钟内联系你确认到店时间。",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "提交失败，请检查信息后重试。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={submitBooking}>
      <label>
        家长姓名
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={updateField}
          placeholder="例如：陈女士"
          required
        />
      </label>
      <label>
        联系电话
        <input
          type="tel"
          name="customerPhone"
          value={form.customerPhone}
          onChange={updateField}
          placeholder="请输入手机号"
          required
        />
      </label>
      <label>
        宠物类型
        <select name="petType" value={form.petType} onChange={updateField}>
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>猫咪</option>
          <option>其他宠物</option>
        </select>
      </label>
      <label>
        想预约的服务
        <select name="serviceType" value={form.serviceType} onChange={updateField}>
          <option>基础沐浴</option>
          <option>全套造型</option>
          <option>猫咪护理</option>
          <option>皮肤护理 SPA</option>
        </select>
      </label>
      <label className="booking-form-wide">
        期望到店时间
        <input
          type="datetime-local"
          name="appointmentAt"
          value={form.appointmentAt}
          onChange={updateField}
          required
        />
      </label>
      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "提交中..." : "提交预约"}
      </button>
      <p className={`booking-message ${status.type}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
