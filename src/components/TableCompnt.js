import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';
import { faEdit, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle:() => {
        return { width: "5%"};
    },
}, {
    dataField: 'nama',
    text: 'Name'
}, {
    dataField: 'alamat',
    text: 'Alamat'
}, {
    dataField: 'link',
    text: 'Aksi',
    formatter: (rowContent, row) => {
        return(
            <div>
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faInfo}/>
                </Button>

                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faEdit}/>
                </Button>
                
                <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </div>
        )
    }
}];



const TableCompnt = (props) => {
    return (
        <Container>
            
            <BootstrapTable keyField='id' data={props.users} columns={columns}/>
        </Container>
        
    )
}

export default TableCompnt
