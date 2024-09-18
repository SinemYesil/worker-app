import {useState, Fragment, useRef,} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const wageInputRef = useRef();



    const minimumWage = 5000;

    const addWorkerHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredWage = wageInputRef.current.value;
        if (nameInputRef.current.value.trim().length === 0) {
            setError({
                title: "İsim Alanı Zorunludur!",
                message: "Lütfen bir isim giriniz.",
            });
            return;
        }

        if (+wageInputRef.current.value < minimumWage) {
            setError({
                title: "Maaş Alanı Zorunludur!",
                message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
            });
            return;
        }
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredName,
                wage: enteredWage,
            },
            ...prevState,
        ]);
        nameInputRef.current.value = "";
        wageInputRef.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };
    return (
        <Fragment>
            {error && <ErrorModal onConfirm={errorHandler} error={error} />}
            <Card className="mt-10">
                <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
                    <label htmlFor="name" className="font-medium">
                        Çalışan İsmi
                    </label>
                    <input
                        type="text"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Çalışan ismi yazınız"
                        id="name"
                        ref={nameInputRef}
                    />
                    <label htmlFor="wage" className="font-medium">
                        Maaş Miktarı
                    </label>
                    <input
                        type="number"
                        className="max-w-[40rem] w-full mx-auto border p-2"
                        placeholder="Maaş miktarı yazınız"
                        id="wage"
                        ref={wageInputRef}
                    />
                    <Button className="mt-2" type="submit">
                        Ekle
                    </Button>
                </form>
            </Card>
        </Fragment>
        /*     <>
          {error && <ErrorModal onConfirm={errorHandler} error={error} />}
          <Card className="mt-10">
            <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
              <label htmlFor="name" className="font-medium">
                Ã‡alÄ±ÅŸan Ä°smi
              </label>
              <input
                type="text"
                className="max-w-[40rem] w-full mx-auto border p-2"
                placeholder="Ã‡alÄ±ÅŸan ismi yazÄ±nÄ±z"
                id="name"
                onChange={(e) => setEnteredWorkerName(e.target.value)}
                value={enteredWorkerName}
              />
              <label htmlFor="wage" className="font-medium">
                MaaÅŸ MiktarÄ±
              </label>
              <input
                type="number"
                className="max-w-[40rem] w-full mx-auto border p-2"
                placeholder="MaaÅŸ miktarÄ± yazÄ±nÄ±z"
                id="wage"
                onChange={(e) => setEnteredWage(e.target.value)}
                value={enteredWage}
              />
              <Button className="mt-2" type="submit">
                Ekle
              </Button>
            </form>
          </Card>
        </> */
    );
};

export default AddWorker;
