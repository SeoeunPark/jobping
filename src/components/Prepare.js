import React, { Component } from "react";
import "../style.css";

class Prepare extends Component {
  state = {
    name: ""
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          이름을 입력해주세요
          <input
            className="input_name"
            placeholder="김미림"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {/* <div>{this.state.name}</div> */}
        </form>
        <br />
        <br />
        <div>취업하고 싶은 방향을 선택해주세요</div>
        <button className="btn_style">개발</button>
        <button className="btn_style">디자인</button>
      </div>
    );
  }
}

export default Prepare;
