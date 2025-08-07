export default function PageTitle({number, title}: {[k:string]:string}){
  return(
      <div className="pageTitle">
        <p className="pageTitle__part-number">{number}</p>
        <h2 className="pageTitle__title">{title}</h2>
      </div>
  )
} 