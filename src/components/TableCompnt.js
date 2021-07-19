import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator';


const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "7%" };
    },
  },
  {
    dataField: "nama",
    text: "Name",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faInfo} />
          </Button>

          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faEdit} />
          </Button>

          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableCompnt = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search.."/>
              </div>
            <hr />
            <BootstrapTable {...props.baseProps} pagination={ paginationFactory() }/>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableCompnt;
