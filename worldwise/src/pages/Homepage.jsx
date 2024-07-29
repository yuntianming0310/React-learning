import { Link } from "react-router-dom";
import PageNac from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNac />

      <section>
        <h1>
          周游世界
          <br />
          WorldWise 记录你的足迹
        </h1>
        <h2>
          一个记录你每一个城市足迹的世界地图。永远不要忘记你的美好经历，向你的朋友展示你如何漫游世界。
        </h2>

        <Link to="/login" className="cta">
          即刻开始记录
        </Link>
      </section>
    </main>
  );
}
