import styles from "./ItWorks.module.css";

function ItWorks() {
  return (
    <div className={styles.itWorks}>
      <h1>How It Works</h1>
      <p className={styles.text}>
        Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit
        non, turpis.
      </p>
      <div className={styles.tble}>
        <div className={styles.table}>
          <div className={styles.orange}></div>
          <span className={styles.or}>STEP 1</span>
        </div>
        <div className={styles.boxing}>
          <div className={styles.hr}></div>
          <div className={styles.boxYl}>
            <h3>Planning</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tble}>
        <div className={styles.table2}>
          <div className={styles.blue2}></div>
          <span className={styles.bl}>STEP 2</span>
          <div className={styles.blue}></div>
        </div>
        <div className={styles.boxing2}>
          <div className={styles.box}>
            <h3>Research</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.Curabitur ullamcorper ultricies nisi.
              Praesent nonummy mi in odio. Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={styles.hr2}></div>
          <div className={styles.boxTest}>
            <h3>Research</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.Curabitur ullamcorper ultricies nisi.
              Praesent nonummy mi in odio. Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tble}>
        <div className={styles.table}>
          <div className={styles.yellow}></div>
          <span className={styles.ye}>STEP 3</span>
        </div>
        <div className={styles.boxing}>
          <div className={styles.hr}></div>
          <div className={styles.boxYl}>
            <h3>Optimizing</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.tble}>
        <div className={styles.table2}>
          <div className={styles.green2}></div>
          <span className={styles.gr}>STEP 2</span>
          <div className={styles.green}></div>
        </div>
        <div className={styles.boxing2}>
          <div className={styles.box}>
            <h3>Results</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
          <div className={styles.hr2}></div>
          <div className={styles.boxTest}>
            <h3>Results</h3>
            <p>
              Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
              Donec mollis hendrerit risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItWorks;
