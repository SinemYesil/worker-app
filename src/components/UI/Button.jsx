const Button = (props) => {
     return(
         <button
             type={props.type||"button"}
             className={`p-2 text-lg bg-teal-700 text-white mt-2 ${props.className}`}>
             {props.children}
         </button>

    )

}
export default Button;


