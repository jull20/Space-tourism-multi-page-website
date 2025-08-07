export default function PageTextContent({theme, textSm, textMd, textLg}: {[k:string]:string}){
    return(
        <>
            <div className="pageTextContent__wrapper">
                <h3 className={`text-md ${theme}-text`}>{textMd}</h3>
                <h2 className={`text-lg ${theme}-text`}>{textLg}</h2>
            </div>
            <p className={`text-sm ${theme}-text`}>{textSm}</p>
        </>
    )
}