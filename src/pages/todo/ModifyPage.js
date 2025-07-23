import { useNavigate } from "react-router-dom";

const ModifyPage = (tno) => {
    const navigate = useNavigate()
    const moveToRead = () => {
        navigate({ pathname: `/todo/read/${tno}` })
    }

    const moveToList = () => {
        navigate({ pathname: `/todo/list` })
    }
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo Modify Page Component...
            </div>
            <div className="text-2xl font-extrabold">
                <button onClick={moveToList}>Move to list</button>
            </div>
            <div className="text-2xl font-extrabold">
                <button onClick={() => moveToRead(tno)}>Move to Read</button>
            </div>
        </div>
    )
}

export default ModifyPage;