import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Category = ({ FilterByCategory }) => {
    const onFilter = (cat) => {
        FilterByCategory(cat)
    }
    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <div>
                    <button onClick={() => onFilter('فطار')} style={{ border: "1px solid #b45b35" }} className="btn mx-2">الفطار</button>
                    <button onClick={() => onFilter('غدا')} style={{ border: "1px solid #b45b35" }} className="btn mx-2">الغداء</button>
                    <button onClick={() => onFilter('عشاء')} style={{ border: "1px solid #b45b35" }} className="btn mx-2">العشاء</button>
                    <button onClick={() => onFilter('سناك')} style={{ border: "1px solid #b45b35" }} className="btn mx-2">سناك</button>
                    <button onClick={() => onFilter('الكل')} style={{ border: "1px solid #b45b35" }} className="btn mx-2">الكل</button>
                </div>
            </Col>
        </Row>
    )
}

export default Category;