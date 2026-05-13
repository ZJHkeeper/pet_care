import BookingForm from "./BookingForm";
import CarouselInitializer from "./CarouselInitializer";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paw Bloom 首页">
          <span className="brand-mark" aria-hidden="true">PB</span>
          <span>Paw Bloom</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#care">流程</a>
          <a href="#pricing">价格</a>
          <a href="#booking">预约</a>
        </nav>
        <a className="header-action" href="tel:400-816-0921">400-816-0921</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-main">
              <p className="eyebrow">城市宠物洗护与造型工作室</p>
              <h1 id="hero-title">Paw Bloom 宠物洗护</h1>
              <p className="hero-copy">
                给猫狗一个安静、干净、有耐心的护理空间。从基础洗护到精修造型，每一次服务都围绕宠物的舒适感展开。
              </p>
              <div className="hero-actions" aria-label="快速操作">
                <a className="button button-primary" href="#booking">立即预约</a>
                <a className="button button-secondary" href="#pricing">查看价目</a>
              </div>
            </div>

            <aside className="booking-panel hero-booking" id="booking" aria-labelledby="booking-title">
              <div>
                <p className="eyebrow">Book A Visit</p>
                <h2 id="booking-title">预约到店</h2>
                <p>
                  营业时间 10:00-20:00。提交后门店会在 30 分钟内联系确认时间、宠物状态和服务项目。
                </p>
                <address>
                  珠海市情侣北路3333号格力海岸27栋21楼<br />
                  可从格力海岸、半岛三路中等公交站按实时导航到店
                </address>
              </div>

              <BookingForm />
            </aside>
          </div>
        </section>

        <section className="quick-strip" aria-label="门店亮点">
          <div>
            <strong>1 对 1 护理</strong>
            <span>预约制接待，减少等待和紧张</span>
          </div>
          <div>
            <strong>可视化操作间</strong>
            <span>洗护区域明亮通透，家长更安心</span>
          </div>
          <div>
            <strong>敏感皮肤方案</strong>
            <span>按毛发、皮肤与年龄调整用品</span>
          </div>
        </section>

        <section className="section section-intro" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Our Services</p>
            <h2 id="services-title">常用洗护项目</h2>
            <p>
              从日常清洁到重要造型日，服务可以按宠物状态灵活组合。每只宠物到店后都会先做毛发、皮肤和情绪评估。
            </p>
          </div>

          <div className="service-carousel" aria-label="常用洗护项目轮播">
            <div className="service-carousel-viewport">
              <div className="service-track">
                <article className="service-card">
                  <img src="/assets/services/basic-bath.png" alt="美容师在明亮洗护区为小型犬进行基础沐浴" />
                  <div>
                    <h3>基础沐浴</h3>
                    <p>温和清洁、吹干梳理、耳道清洁、脚底毛修整，适合每月日常护理。</p>
                  </div>
                </article>

                <article className="service-card">
                  <img src="/assets/services/cat-low-stress-care.png" alt="猫咪在安静护理台上接受低压梳理护理" />
                  <div>
                    <h3>猫咪低压护理</h3>
                    <p>安静预约时段、低噪吹风、分段安抚，减少猫咪在陌生环境中的压力。</p>
                  </div>
                </article>

                <article className="service-card">
                  <img src="/assets/services/styling-trim.png" alt="美容师在护理台前为小型犬进行精修造型" />
                  <div>
                    <h3>精修造型</h3>
                    <p>按犬种、体型和家长偏好修剪线条，包含面部、四肢、尾部与整体比例调整。</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="service-carousel-controls" aria-label="轮播控制">
              <button className="carousel-button" type="button" data-carousel="prev" aria-label="上一项">‹</button>
              <div className="carousel-dots" aria-label="选择服务项目">
                <button className="carousel-dot is-active" type="button" data-slide="0" aria-label="查看基础沐浴"></button>
                <button className="carousel-dot" type="button" data-slide="1" aria-label="查看猫咪低压护理"></button>
                <button className="carousel-dot" type="button" data-slide="2" aria-label="查看精修造型"></button>
              </div>
              <button className="carousel-button" type="button" data-carousel="next" aria-label="下一项">›</button>
            </div>
          </div>
        </section>

        <section className="care-band" id="care" aria-labelledby="care-title">
          <div className="care-copy">
            <p className="eyebrow">Care Flow</p>
            <h2 id="care-title">一次洗护，分成四个安心步骤</h2>
            <p>
              我们把流程拆得更细，是为了让宠物有时间适应环境，也方便护理师及时发现打结、皮肤泛红或耳道异味等问题。
            </p>
          </div>
          <ol className="care-steps">
            <li><span>01</span><strong>入店评估</strong><p>确认体重、皮肤、毛结、情绪与既往护理习惯。</p></li>
            <li><span>02</span><strong>分区清洁</strong><p>按身体区域使用合适水温和洗护产品。</p></li>
            <li><span>03</span><strong>耐心吹整</strong><p>低速起吹，逐步梳开毛发，避免拉扯。</p></li>
            <li><span>04</span><strong>护理反馈</strong><p>交付毛发状态、居家护理建议和下次时间。</p></li>
          </ol>
        </section>

        <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-heading compact">
            <p className="eyebrow">Pricing</p>
            <h2 id="pricing-title">透明价目</h2>
            <p>最终价格会根据体型、毛量、毛结程度与服务组合微调，到店评估后先确认再开始。</p>
          </div>

          <div className="pricing-grid">
            <article className="price-card">
              <div className="price-top"><h3>小型犬洗护</h3><span>¥128 起</span></div>
              <p>适合泰迪、比熊、约克夏等 8kg 以下犬只。</p>
              <a href="#booking">预约此项</a>
            </article>
            <article className="price-card featured">
              <div className="price-top"><h3>全套造型</h3><span>¥268 起</span></div>
              <p>洗护、精修、局部护理与造型沟通，适合换季或拍照前。</p>
              <a href="#booking">预约此项</a>
            </article>
            <article className="price-card">
              <div className="price-top"><h3>猫咪护理</h3><span>¥198 起</span></div>
              <p>包含基础清洁、梳毛、指甲与低压吹干。</p>
              <a href="#booking">预约此项</a>
            </article>
          </div>
        </section>

        <section className="section reviews-section" aria-labelledby="reviews-title">
          <div className="section-heading compact">
            <p className="eyebrow">Customer Reviews</p>
            <h2 id="reviews-title">用户评价</h2>
            <p>来自近期到店家长的反馈摘录，帮助你更快判断这里是否适合自家的小朋友。</p>
          </div>

          <div className="review-carousel js-carousel" aria-label="用户评价轮播">
            <div className="review-carousel-viewport carousel-viewport">
              <div className="review-track">
                <article className="review-card">
                  <div className="review-meta"><span className="review-avatar" aria-hidden="true">陈</span><div><h3>陈女士和豆包</h3><span>小型犬洗护</span></div></div>
                  <p>豆包第一次到店有点紧张，护理师会先陪它熟悉环境，洗完毛很蓬松，耳朵和脚底也处理得很细。</p>
                </article>
                <article className="review-card">
                  <div className="review-meta"><span className="review-avatar" aria-hidden="true">周</span><div><h3>周先生和奶盖</h3><span>猫咪低压护理</span></div></div>
                  <p>家里的猫很怕吹风，这次分段护理明显轻松很多。结束后还会说明毛结位置和在家梳毛频率，很专业。</p>
                </article>
                <article className="review-card">
                  <div className="review-meta"><span className="review-avatar" aria-hidden="true">林</span><div><h3>林小姐和糯米</h3><span>全套造型</span></div></div>
                  <p>造型前沟通得很仔细，会根据狗狗脸型调整长度。接回来的时候状态很好，照片也比平时上镜。</p>
                </article>
              </div>
            </div>

            <div className="service-carousel-controls" aria-label="评价轮播控制">
              <button className="carousel-button" type="button" data-carousel="prev" aria-label="上一条评价">‹</button>
              <div className="carousel-dots" aria-label="选择用户评价">
                <button className="carousel-dot is-active" type="button" data-slide="0" aria-label="查看陈女士的评价"></button>
                <button className="carousel-dot" type="button" data-slide="1" aria-label="查看周先生的评价"></button>
                <button className="carousel-dot" type="button" data-slide="2" aria-label="查看林小姐的评价"></button>
              </div>
              <button className="carousel-button" type="button" data-carousel="next" aria-label="下一条评价">›</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-labelledby="footer-location-title">
        <section className="footer-location">
          <div className="footer-location-copy">
            <p className="eyebrow">Visit Us</p>
            <h2 id="footer-location-title">找到 Paw Bloom</h2>
            <p>到店前可先电话确认排班，我们会为容易紧张的猫狗预留更安静的护理时段。</p>
            <address>
              珠海市情侣北路3333号格力海岸27栋21楼<br />
              近情侣北路海岸线，可从格力海岸、半岛三路中等公交站按实时导航到店<br />
              营业时间 10:00-20:00
            </address>
            <div className="location-actions" aria-label="门店联系入口">
              <a className="location-link location-link-primary" href="https://uri.amap.com/search?keyword=%E7%8F%A0%E6%B5%B7%E5%B8%82%E6%83%85%E4%BE%A3%E5%8C%97%E8%B7%AF3333%E5%8F%B7%E6%A0%BC%E5%8A%9B%E6%B5%B7%E5%B2%B827%E6%A0%8B21%E6%A5%BC&city=%E7%8F%A0%E6%B5%B7" target="_blank" rel="noopener noreferrer">打开地图</a>
              <a className="location-link" href="tel:400-816-0921">电话咨询</a>
            </div>
          </div>
          <figure className="map-card">
            <div className="map-visual" aria-label="Paw Bloom 门店地图，标注珠海格力海岸地址、公交站和到店导航提示">
              <img src="/assets/maps/paw-bloom-map.png" alt="AI 绘制的珠海情侣北路格力海岸周边宠物风路线地图底图" />
              <div className="map-label map-label-address"><strong>Paw Bloom 宠物洗护</strong><span>珠海市情侣北路3333号格力海岸27栋21楼</span></div>
              <div className="map-label map-label-bus-main"><strong>格力海岸站</strong><span>公交到站后按导航步行</span></div>
              <div className="map-label map-label-bus-nearby"><strong>半岛三路中站</strong><span>Z75 / Z76 / B20 等线路</span></div>
              <span className="map-street map-street-qinglv">情侣北路</span>
              <span className="map-street map-street-coast">格力海岸</span>
              <div className="map-route-note">公交或网约车到格力海岸后，导航至 27 栋 21 楼</div>
            </div>
            <figcaption>AI 绘制宠物风底图，并叠加真实地址与珠海格力海岸周边交通信息。</figcaption>
          </figure>
        </section>
        <div className="footer-bottom">
          <span>Paw Bloom 宠物洗护</span>
          <span>用更安静的方式，照顾每一只小伙伴。</span>
        </div>
      </footer>
      <CarouselInitializer />
    </>
  );
}
