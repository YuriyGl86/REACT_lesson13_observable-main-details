import { useDispatch, useSelector } from "react-redux";
import { servicesListRequest } from '../../actions/actionCreators';
import { List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from "react";



export  function HomePage() {
    const dispatch = useDispatch();
    const { items, loadingItems, error } = useSelector((state) => state.services);

    useEffect(()=>{
        dispatch(servicesListRequest())
    }, [])

  return (
    <>


        {loadingItems? 'loading...': null}
        {error?'error': null }
        
            <List
                className="demo-loadmore-list"
                loading={loadingItems}
                itemLayout="horizontal"
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton  title={false} loading={loadingItems} active>
                            <List.Item.Meta
                            title={<Link to={`/${item.id}`}>{item.name}</Link>}
                            description={item.price}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        
    </>
  )
}


