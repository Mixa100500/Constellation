import React, { useEffect } from 'react';
import { addChunk, selectIsCurrentChunkLoading } from '../../reducers/homePageLoadingReducer/homePageLoadingReducer';
import { useDispatch, useSelector } from 'react-redux';

export const ChunkLoader = (props) => {
  const { renderProp, chunk } = props
  const dispatch = useDispatch()
  const IsLoading = useSelector(selectIsCurrentChunkLoading(chunk))

  useEffect(() => {
    if(IsLoading) {
      dispatch(addChunk)
    }
  }, [IsLoading])

  return (
    <>
      {IsLoading && renderProp()}
    </>
  )
}


