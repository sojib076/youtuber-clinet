import { useEffect } from "react"

const DynamicTitle = title => {
    useEffect(() => {
        document.title = `${title} - MR.Tuber`;
    }, [title])
};

export default DynamicTitle;