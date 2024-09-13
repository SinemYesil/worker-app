import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState} from "react";
const AddWorker = () => {
    const [enteredWorkerName, setEnteredWorkerName]=useState("");
    const [enterWage, setEnterWage]=useState("");
    const workerNameChangeHandler = (e) => {
      setEnteredWorkerName(e.target.value);

    }
    const wageChangeHandler = (e) => {
        setEnterWage(e.target.value);
    }
    const addWorkerHandler = (e) => {
        e.preventDefault();
        console.log(enteredWorkerName,enterWage);


    }

    return (

        <Card className="mt-10">
            <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
                <label htmlFor="name" className="font-medium">
                   Çalışan İsmi:
                </label>
                <input
                    type="text"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder="Çalışan İsmi yazınız"
                    id="name"
                    onChange={workerNameChangeHandler}
                />
                <label htmlFor="wage" className="font-medium">
                   Maaş Mikatarı:
                </label>
                <input
                    type="number"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder=" Maaş Mikatarı yazınız"
                    id="wage"
                    onChange={wageChangeHandler}
                />
                <Button className="mt-2 bg-blue-600" type="submit">
                    Ekle
                </Button>
            </form>
        </Card>
    );
};

export default AddWorker;
