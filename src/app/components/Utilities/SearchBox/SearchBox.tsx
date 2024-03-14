"use client"
import Link from 'next/link'
import styles from './SearchBox.module.css'
import Resources from '@/app/resources/resources'
import { useEffect, useState } from 'react'
export default function SearchBox() {
    // let ref=useRef()
    // let [file, setFile]=useState(null)
    let fileInputElement:any = null
    let [searchQuery, setSearchQuery]=useState<string>("")
    useEffect(()=>{
        fileInputElement=document.getElementById('searchBox__fileInput')

    })
    return (
        <div className={`${styles.searchBox}`}>
            <input id="searchBox__search" className={`${styles.searchBox__search}`} onChange={
                ()=>{
                    let searchNode:any=document.getElementById("searchBox__search")
                    if(searchNode) setSearchQuery(searchNode.value)
                }
            }>
            </input>
            <input type='file' className={`${styles.searchBox__fileInput}`} id='searchBox__fileInput' />
            <img className={`${styles.searchBox__cameraImage}`} src={Resources.Camera.src} onClick={() => {
                fileInputElement ? fileInputElement.click() : console.log('no file input')
            }
            }>

            </img>
            <Link href={"SearchResults?query="+searchQuery}>
                <img className={`${styles.searchBox__go}`} src={Resources.sendButton.src}>
                </img>
            </Link>
        </div>
    )
}