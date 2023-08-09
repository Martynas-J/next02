import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import getData from "@/components/GetData/GetData";

export const metadata = {
  title: 'Blog',
  description: 'Blog Page',
}

const Blog = async () => {
  const data = await getData("");
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <h2 className={styles.title}>{item.username}</h2>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;