import Card from "../UI/Card";
import Button from "../UI/Button";
const AddWorker = () => {
    return (
        <Card className="mt-10">
            <form className="flex flex-col gap-y-2">
                <label htmlFor="name" className="font-medium">
                   Çalışan İsmi:
                </label>
                <input
                    type="text"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder="Çalışan İsmi yazınız"
                    id="name"
                />
                <label htmlFor="wage" className="font-medium">
                   Maaş Mikatarı:
                </label>
                <input
                    type="number"
                    className="max-w-[40rem] w-full mx-auto border p-2"
                    placeholder=" Maaş Mikatarı yazınız"
                    id="wage"
                />
                <Button className="mt-2 bg-blue-600">
                    Ekle
                </Button>
            </form>
        </Card>
    );
};

export default AddWorker;
