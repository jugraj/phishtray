import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

import { getAllFiles } from '../../data/files';

import FileListItem from './components/FileListItem';
import FileModal from './components/FileModal';

const columns = [
  {
    width: '30',
    header: '',
  },
  {
    width: '30',
    header: 'Description',
  },
  {
    width: '20',
    header: 'Date created',
  },
  {
    width: '20',
    header: '',
  },
];

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  minHeight: '100%',
  margin: 50,
  marginTop: 0,
});

const Table = styled('table')({
  width: '100%',
});

function TableHead() {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          const width = `${column.width}%`;
          return (
            <th
              key={index}
              className={css({
                width,
                padding: '50px 0 10px',
                textAlign: 'left',
                color: '#5596e6',
              })}
            >
              {column.header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default class FileManager extends Component {
  constructor() {
    super();
    this.state = {
      files: getAllFiles(),
      modal: {
        isOpen: false,
        fileUrl: null,
      },
    };
  }

  deleteFileHandler = fileToDelete => {
    const files = this.state.files;
    const updatedFiles = files.filter(file => file.id !== fileToDelete.id);
    let modal = this.state.modal;
    if (modal.isOpen && modal.fileUrl === fileToDelete.fileUrl) {
      modal = {
        isOpen: false,
        fileUrl: null,
      };
    }
    this.setState({
      files: updatedFiles,
      modal,
    });
  };

  displayFileModalHandler = fileUrl => {
    this.setState({
      modal: {
        isOpen: true,
        fileUrl,
      },
    });
  };

  hideFileModalHandler = () => {
    this.setState({
      modal: {
        isOpen: false,
        fileUrl: null,
      },
    });
  };

  render() {
    return (
      <Container>
        {this.state.modal.isOpen && (
          <FileModal
            fileUrl={this.state.modal.fileUrl}
            hideFileModalHandler={this.hideFileModalHandler}
          />
        )}
        <Table>
          <TableHead />
          <tbody>
            {this.state.files.map(file => (
              <FileListItem
                key={file.id}
                file={file}
                deleteFileHandler={this.deleteFileHandler}
                displayFileModalHandler={this.displayFileModalHandler}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
