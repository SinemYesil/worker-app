import Card from "../UI/Card";
import Button from "../UI/Button";
import  { useState, Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddWorker = (props) => {
    const [enteredWorkerName, setEnteredWorkerName] = useState("");
    const [enterWage, setEnterWage] = useState("");
    const [error, setError] = useState();

    const minWage = 5000;

    const addWorkerHandler = (e) => {
        e.preventDefault();

        // Check for valid worker name and wage
        if (enteredWorkerName.trim().length === 0 || enterWage.trim().length === 0) {
            setError({
                title:"Zorunlu Alanları Doldurunuz!",
                message:"Lütfen bir isim ya da maaş giriniz",
            })
            return;
        }

        // Ensure wage is above the minimum wage
        if (+enterWage < minWage) {
            setError(
                {
                    title: "Maaş Alanı Zorunludur!",
                    message: `Lütfen ${minWage} değerinden büyük bir maaş değeri giriniz.`,

                }
            )
            return;
        }

        // Update the worker list
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredWorkerName,
                wage: enterWage,
            },
            ...prevState,
        ]);

        // Reset the input fields
        setEnteredWorkerName("");
        setEnterWage("");
    };
    const errorHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal key="error-modal"  onConfirm={errorHandler} error={error} />}

            <Card className="mt-10" key="card-add-worker">
                <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
                    <label htmlFor="name" className="font-medium">
                        Çalışan İsmi:
                    </label>
                    <input
                        type="text"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Çalışan İsmi yazınız"
                        id="name"
                        onChange={(e) => setEnteredWorkerName(e.target.value)}
                        value={enteredWorkerName}
                    />
                    <label htmlFor="wage" className="font-medium">
                        Maaş Mikatarı:
                    </label>
                    <input
                        type="number"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Maaş Miktarı yazınız"
                        id="wage"
                        onChange={(e) => setEnterWage(e.target.value)}
                        value={enterWage}
                    />
                    <Button className="mt-2 bg-blue-600" type="submit">
                        Ekle
                    </Button>
                </form>
            </Card>
        </Fragment>
        // <>
        //     {error && <ErrorModal key="error-modal"  onConfirm={errorHandler} error={error} />}
        //
        //     <Card className="mt-10" key="card-add-worker">
        //         <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        //             <label htmlFor="name" className="font-medium">
        //                 Çalışan İsmi:
        //             </label>
        //             <input
        //                 type="text"
        //                 className="max-w-[40rem] w-full mx-auto border p-2"
        //                 placeholder="Çalışan İsmi yazınız"
        //                 id="name"
        //                 onChange={(e) => setEnteredWorkerName(e.target.value)}
        //                 value={enteredWorkerName}
        //             />
        //             <label htmlFor="wage" className="font-medium">
        //                 Maaş Mikatarı:
        //             </label>
        //             <input
        //                 type="number"
        //                 className="max-w-[40rem] w-full mx-auto border p-2"
        //                 placeholder="Maaş Miktarı yazınız"
        //                 id="wage"
        //                 onChange={(e) => setEnterWage(e.target.value)}
        //                 value={enterWage}
        //             />
        //             <Button className="mt-2 bg-blue-600" type="submit">
        //                 Ekle
        //             </Button>
        //         </form>
        //     </Card>
        //
        // </>
    );
};

export default AddWorker;