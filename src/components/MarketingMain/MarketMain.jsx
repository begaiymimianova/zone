import styles from "./MarketingMain.module.css";
import ellipsevl from "../../assets/MarcetingBlog/Ellipse16.svg";
import richard from "../../assets/MarcetingBlog/richard.svg";
import bianka from "../../assets/MarcetingBlog/bianka.svg";
import husna from "../../assets/MarcetingBlog/husna.svg";
import maddox from "../../assets/MarcetingBlog/maddox.svg";
import calista from "../../assets/MarcetingBlog/calista.svg";
import antoine from "../../assets/MarcetingBlog/antoine.svg";
import margaret from "../../assets/MarcetingBlog/margaret.svg";
import pamella from "../../assets/MarcetingBlog/pamella.svg";
import rightVec from "../../assets/OurCase_img/rightVector.svg";
import leftVec from "../../assets/OurCase_img/leftVector.svg";
import search from "../../assets/MarcetingBlog/search.svg";
import ellipse from "../../assets/MarcetingBlog/Ellipse17.svg";
import imageRatio from "../../assets/MarcetingBlog/ImageRatio.svg";
import imageRatio2 from "../../assets/MarcetingBlog/ImageRatio2.svg";
import imageRatio3 from "../../assets/MarcetingBlog/ImageRatio3.svg";
import imageRatio4 from "../../assets/MarcetingBlog/ImageRatio4.svg";
function MarketingMain() {
  return (
    <div className={styles.marketingMain}>
      <div className={styles.rightCon}>
        <div className={styles.topCon}>
          <div className={styles.card}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={richard} alt="richard" />
              <p>Francesca Richards</p>
            </div>
          </div>
          <div className={styles.card2}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={bianka} alt="bianka" />
              <p>Francesca Richards</p>
            </div>
          </div>
        </div>
        <div className={styles.middCon}>
          <div className={styles.card3}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={husna} alt="husna" />
              <p>Francesca Richards</p>
            </div>
          </div>
          <div className={styles.card4}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={maddox} alt="maddox" />
              <p>Francesca Richards</p>
            </div>
          </div>
        </div>
        <div className={styles.middCon2}>
          <div className={styles.card5}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={calista} alt="calista" />
              <p>Francesca Richards</p>
            </div>
          </div>
          <div className={styles.card6}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={antoine} alt="antoine" />
              <p>Francesca Richards</p>
            </div>
          </div>
        </div>
        <div className={styles.middCon3}>
          <div className={styles.card7}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={margaret} alt="margaret" />
              <p>Francesca Richards</p>
            </div>
          </div>
          <div className={styles.card8}>
            <span>24 May 2019 </span>
            <span>
              <img src={ellipsevl} alt="icon" />
            </span>
            <span>8 min read</span>
            <h1>How to design a product that can grow itself 10x in year:</h1>
            <div className={styles.bottomCard}>
              <img src={pamella} alt="pamella" />
              <p>Francesca Richards</p>
            </div>
          </div>
        </div>
        <div className={styles.rightBottom}>
          <img src={rightVec} alt="vector" />
          <p className={styles.activ}>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>...</p>
          <img src={leftVec} alt="vector" />
        </div>
      </div>
      <div className={styles.leftCon}>
        <div className={styles.leftTop}>
          <div className={styles.input}>
            <img src={search} alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
          <h1>Categories</h1>
          <div className={styles.ul}>
            <div className={styles.li}></div>
            <p>Marketing</p>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}></div>
            <p>Community</p>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}></div>
            <p>Tutorials</p>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}></div>
            <p>Business</p>
          </div>
          <div className={styles.ul}>
            <div className={styles.li}></div>
            <p>Management</p>
          </div>
        </div>
        <div className={styles.leftMidd}>
          <h1>Recent Posts</h1>
          <div className={styles.boxLeft}>
            <img src={imageRatio} alt="ratio" />
            <div className={styles.textLeft}>
              <h4>
                Understanding color theory: the color wheel and finding...
              </h4>
              <span>November 7, 2017</span>
              <span>
                <img src={ellipse} alt="icon" />
              </span>
              <span>8 min read</span>
            </div>
          </div>
          <div className={styles.boxLeft}>
            <img src={imageRatio2} alt="ratio" />
            <div className={styles.textLeft}>
              <h4>How to design a product that can grow itself 10x in year</h4>
              <span>October 24, 2018</span>
              <span>
                <img src={ellipse} alt="icon" />
              </span>
              <span>8 min read</span>
            </div>
          </div>
          <div className={styles.boxLeft}>
            <img src={imageRatio3} alt="ratio" />
            <div className={styles.textLeft}>
              <h4>Any mechanical keyboard enthusiasts in design?</h4>
              <span>November 28, 2015</span>
              <span>
                <img src={ellipse} alt="icon" />
              </span>
              <span>8 min read</span>
            </div>
          </div>
          <div className={styles.boxLeft}>
            <img src={imageRatio4} alt="ratio" />
            <div className={styles.textLeft}>
              <h4>
                Yo Reddit! Whats a small thing that anyone can do at nearly...
              </h4>
              <span>May 29, 2017</span>
              <span>
                <img src={ellipse} alt="icon" />
              </span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
        <div className={styles.leftMidd2}>
          <h1>Popular Tags</h1>
          <div className={styles.textBox}>
            <p>Marketing</p>
            <p>Development</p>
            <p>Banking</p>
          </div>
          <div className={styles.textBox}>
            <p>HR & Recruting</p>
            <p>Design</p>
            <p>Management</p>
          </div>
          <div className={styles.textBox}>
            <p>Business</p>
            <p>Community</p>
            <p>Tutorials</p>
          </div>
        </div>
        <div className={styles.leftBottom}>
          <h3>Advertisement</h3>
          <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
          <button>Go Now</button>
        </div>
      </div>
    </div>
  );
}

export default MarketingMain;
