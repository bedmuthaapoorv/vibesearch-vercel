"use client"
import Link from 'next/link'
import styles from './SearchBox.module.css'
import Resources from '@/app/resources/resources'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
export default function SearchBox() {
    // let ref=useRef()
    let [file, setFile] = useState<any>(null)
    let fileInputElement: any = null
    let [searchQuery, setSearchQuery] = useState<string>("")
    const router = useRouter();
    useEffect(() => {
        fileInputElement = document.getElementById('searchBox__fileInput')

    })
    console.log(file)
    return (
        <div className={`${styles.searchBox}`}>
            <input id="searchBox__search" className={`${styles.searchBox__search}`} onChange={
                () => {
                    let searchNode: any = document.getElementById("searchBox__search")
                    if (searchNode) setSearchQuery(searchNode.value)
                }
            }>
            </input>
            <input type='file' className={`${styles.searchBox__fileInput}`} id='searchBox__fileInput' onChange={(event: any) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event: any) => {
                        const base64String:any = event.target.result as string;
                        //console.log(base64String);
                        setFile(base64String.split(',')[1])
                        // You can do whatever you want with the base64String here
                        localStorage.setItem('image-file', base64String.split(',')[1]);
                    };
                    reader.readAsDataURL(file);
                }
            }} />
            <img className={`${styles.searchBox__cameraImage}`} src={Resources.Camera.src} onClick={() => {
                fileInputElement ? fileInputElement.click() : console.log('no file input')
            }
            }>

            </img>
            <Link href={
                "SearchResults?query=" + searchQuery       
            }>
                <img className={`${styles.searchBox__go}`} src={Resources.sendButton.src}>
                </img>
            </Link>
        </div>
    )
}