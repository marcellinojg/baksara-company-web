

const DownloadAppLink = () => {
    return <div className="flex items-center gap-2 select-none">
        <a href="https://www.google.com" target="_blank">
            <img src="/images/icon-ios.webp" alt="Download App Store" width={150} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.baksaraid.baksara" target="_blank">
            <img src="/images/icon-gplay.webp" alt="Download Google Play Store" width={150} />
        </a>
    </div>
}

export default DownloadAppLink