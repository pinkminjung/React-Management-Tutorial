import React from 'react';

class CustomerDelete extends React.Component {

  deleteCustmoer(id) {
    // /api/custoerms/7 (고객 아이디가 7인 데이터를 삭제)
    const url = '/api/custmers/' + id;
    fetch(url, {
      method: 'DELETE'
    });
    this.props.stateRefresh();
  }
  render () {
    return (
      <button onClick = {(e) => { this.deleteCustomer(this.props.id)} } >삭제</button>
    )
  }
}

export default CustomerDelete;