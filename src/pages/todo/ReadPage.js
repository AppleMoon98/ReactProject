import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {
    const {tno} = useParams()
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({page, size}).toString()

    const moveToModify = useCallback((tno) =>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search:queryStr
        })
    }, [navigate, queryStr])

    const moveToList = useCallback(() => {
        navigate({
            pathname:`/todo/list`,
            search:queryStr
        })
    }, [navigate, queryStr])

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-2xl font-extrabold">
                Todo Read Page Component... {tno}
                <div>
                    <button onClick={ () => moveToModify(tno)}>Test Modify</button>
                </div>
                <div>
                    <button onClick={() => moveToList()}>Test List</button>
                </div>
            </div>
        </div>
    )
}

export default ReadPage;