
import styles from "./layout.module.css";
import SideBar from "@/components/layOutSideBar";

export default function CategoryLayout({ children, modal }) {
    return (
        <div className={styles.layoutContainer}>
            <SideBar />
            {children}
            {modal}
        </div>
    );
}
