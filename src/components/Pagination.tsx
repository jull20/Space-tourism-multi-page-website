type paginationType = {
    length:number, 
    handler:(ind:number)=>void
}

export function Pagination(props: paginationType){
    return(
        <ul className="paginatinon">
            <RadioButtons {...props} />
        </ul>
    )
}

export function NumberedPagination(props: paginationType){
    return(
        <ol start={0} className="numberedPagination">
            <RadioButtons {...props} />
        </ol>
    )
}

function RadioButtons({length, handler}: paginationType){
    const array = Array(length).fill(0);
    return(
        <>
            {array.map((el, index:number) => {
                return(
                    <li 
                        key={index}
                        className="radioBtn__wrapper" 
                        onClick={()=>handler(index)} 
                    >
                        <input 
                            className="radioBtn__item" 
                            type="radio" 
                            name="pagination" 
                            id={index.toString()} 
                            defaultChecked={index==0 && true}
                        />
                    </li>
                )
            })}
        </>
    )
}