import { useDispatch, useSelector } from "react-redux";
import { itemDetailRequest } from '../../actions/actionCreators';
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Alert, Card , Spin } from 'antd';


export  function DetailViewPage() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { item, loadingDetails, error } = useSelector((state) => state.details);

  useEffect(()=>{
      console.log(id)
      dispatch(itemDetailRequest(id))
  }, [id])


  console.log('item', item)
  console.log('loadingDetails', loadingDetails)
  console.log('error', error)



  return (
    <>
      {loadingDetails?
      <Spin tip="Loading..." size="large"> 
        <Alert
          message="Loading data from server"
          description="wait for loading..."
          type="info"
        />
      </Spin>: null}

      {error?
      <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />: null}

      {item?
      <Card title={item.name}  style={{ width: 300 }}>
          <p>{item.content}</p>
          <p>price: {item.price}</p>
          <p>id: {item.id}</p>
      </Card>:null}
    </>
  )
}
