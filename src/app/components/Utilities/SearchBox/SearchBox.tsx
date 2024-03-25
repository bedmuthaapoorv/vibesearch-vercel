"use client";
import Link from "next/link";
import styles from "./SearchBox.module.css";
import Resources from "@/app/resources/resources";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {

  // let ref=useRef()
  let [file, setFile] = useState(null);
  let fileInputElement: any = null;
  let [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    fileInputElement = document.getElementById("searchBox__fileInput");
  });
  console.log(file);
  const handleSearch = () => {
    console.log("Calling function...");

    console.log("This is teh query", searchQuery);

    router.push(`/components/SearchResults?query=${searchQuery}`);
  };
  return (
    <div className={`${styles.searchBox}`}>
      <div className={`${styles.searchBox__leftContainer}`}>
        <Link href={"SearchResults?query=" + searchQuery}>
          <img
            className={`${styles.searchBox__go}`}
            src={Resources.sendButton.src}
          ></img>
        </Link>
        <input
          type="text"
          id="searchBox__search"
          placeholder="What are you looking for?"
          className={styles.searchBox__search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className={`${styles.searchBox__rightContainer}`}>
        <input
          type="file"
          className={`${styles.searchBox__fileInput}`}
          id="searchBox__fileInput"
          onChange={(event: any) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event: any) => {
                const base64String: any = event.target.result as string;
                //console.log(base64String);
                setFile(base64String);
                // You can do whatever you want with the base64String here
                localStorage.setItem("image-file", base64String);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        <img
          className={`${styles.searchBox__cameraImage}`}
          src={Resources.Camera.src}
          onClick={() => {
            fileInputElement
              ? fileInputElement.click()
              : console.log("no file input");
          }}
        ></img>
      </div>
    </div>
  );
}

