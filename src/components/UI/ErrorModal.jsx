import Button from "./Button";
import Card from "./Card";
import React, { useEffect, useRef }  from "react";
import ReactDOM from "react-dom";

const Backdrop =(props )=> {
    return <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0 left-0"
        onClick={props.onConfirm}
    ></div>
}
const ModalOverlay =(props)=> {
    return <div className="error-modal">

        <Card className="w-[36rem] p-0 z-20">
            <header className="bg-red-700 p-4  rounded-t-xl">
                <h2 className="text-center text-xl text-white">{props.title}</h2>
            </header>
            <section className="p-4">{props.message}</section>
            <footer className="p-4 flex justify-end">
                <Button className="w-32" onClick={props.onConfirm}>
                    Tamam
                </Button>
            </footer>
        </Card>
    </div>
}

const ErrorModal = (props) => {
    const {onConfirm, error} = props;
    const {title, message} = error;
    const cleanupRef = useRef();
    useEffect(() => {
        console.log("Modal oluştuurldu!");

        return () => {
            if (cleanupRef.current) {
                console.log("Component kaldırıldı!");
                props.setWorkers([]);
            }

        }; },[cleanupRef, props]);
    useEffect(() => {
        return () => {
            cleanupRef.current = true;
        };
    }, []);
    return (
        <React.Fragment >
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm}/>,document.getElementById("bakdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onConfirm={onConfirm}/>,document.getElementById("overlay-root"))}
        </React.Fragment>
    );
};

export default ErrorModal;
