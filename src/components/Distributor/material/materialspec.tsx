import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getElementGroupList, getMaterialsList, getStructuralList } from '../../../services/retailerService';


// getting the values of local storage
const getDatafromLS = (name:string) => {
  const data = sessionStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const DisMaterial = () => {

  const [books, setBooks] = useState(getDatafromLS('CarbonCalcList'));

  // input field states
  const [materialSpec, setMaterialSpec] = useState('');
  const [StructrualElem, setStructuralElem] = useState('');
  const [ele, setEle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [gia, setGia] = useState(getDatafromLS('gia'));

  const [materialSpecList, setMaterialSpecList] = useState([]);
  const [StructrualElemList, setStructuralElemList] = useState([]);
  const [ElementGroupList, setElementGroupList] = useState([]);

  // form submit event
  const handleAddBookSubmit = (e: any) => {
    e.preventDefault();
    // creating an object
    let book = {
      materialSpec,
      StructrualElem,
      isbn,
      ele,
      gia
    }
    console.log("book: ", book);
    const curBooks = books;
    curBooks.push(book);
    setBooks(curBooks);
    sessionStorage.setItem('CarbonCalcList', JSON.stringify(books));

    setMaterialSpec('');
    setStructuralElem('');
    setIsbn('');
    setEle('',)
  }

  useEffect(() => {

    getMaterialsList()
      .then((res) => {
        setMaterialSpecList(res.data);
        // console.log(res.data);
        // console.log(materialSpecList);
      })
      .catch((err) => {
        console.log(err);
      });

    getElementGroupList()
      .then((res) => {
        setElementGroupList(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getStructuralList()
      .then((res) => {
        setStructuralElemList(res.data)
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    console.log(materialSpecList);
  }, [materialSpecList]);

  return (
    <div className='wrapper'>

      <p>Add Materials</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddBookSubmit}>
            <Row>
              <Col md={{ span: 4, offset: 8 }}>
                <span>GIA[m2]</span>
                <input required onChange={(e) => {setGia(e.target.value);sessionStorage.setItem('gia', e.target.value);console.log(gia)}} value={gia}/>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <label>Material Specifications</label>
                <select className='form-control' onChange={(e) => setMaterialSpec(e.target.value)} value={materialSpec}>
                  <option>Select the Material</option>

                  {materialSpecList.map((material, index) => (
                    <option key={index + 1} value={material['material_specification']+ ';' + (index+1)}>{material['material_specification']}</option>
                  ))}

                </select>
              </Col>

              <Col>
                <label>Structural Element</label>
                <select className='form-control' required
                  onChange={(e) => setStructuralElem(e.target.value)} value={StructrualElem} >
                  <option>Select Structural Element</option>
                  {StructrualElemList.map((material, index) => (
                    <option key={material['id']} value={material['element_name']+ ';' + (index+1)}>{material['element_name']}</option>
                  ))}
                </select>
              </Col>

              <Col>
                <label>Element Group</label>
                <select className='form-control' required
                  onChange={(e) => setEle(e.target.value)} value={ele}>
                  <option>Select the Element Group</option>
                  {ElementGroupList.map((material, index) => (
                    <option key={material['id']} value={material['group_name']+ ';' + (index+1)}>{material['group_name']}</option>
                  ))}
                </select>
              </Col>
              <Col>
                <label>Quantity</label>
                <input type="text" className='form-control' required
                  onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
              </Col>

            </Row>

            <br></br>
            <div>

              <button type="submit" className='btn btn-success btn-md' >
                Add to Cart
              </button>
              <Link to='/distributor/list'>
                <button className='btn btn-warning btn-md' >
                  View Cart
                </button>
              </Link>

            </div>

          </form>
        </div>



      </div>
    </div>
  )
}

export default DisMaterial


// http://api2.tracepharm.io:8000/carbon_table/ -> material specification
// http://api2.tracepharm.io:8000/structural/ -> structural
// http://api2.tracepharm.io:8000/element/ -> element

// on save: post request to: http://api2.tracepharm.io:8000/carbon_input/