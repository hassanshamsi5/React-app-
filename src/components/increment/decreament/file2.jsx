import {memo} from 'react'

function Child() {
    console.log("child render");
    return (
        <>
            <h1>Child</h1>
        </>
    )
}
export default memo(Child)  