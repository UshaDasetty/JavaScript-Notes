import React, {useEffect} from 'react'

const UseDocument = ({count}) => {
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
}

export default UseDocument