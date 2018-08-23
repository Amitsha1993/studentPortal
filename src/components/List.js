import React, { Component } from 'react';
import './list.css';
class List extends Component {
    //fucntion to check student is fail or not

    getFailStundent(data) {
        if (data["totalMarks"] == data.maxmarks.marks) {
            return "Topper";
        }
        let result = Object.keys(data.marks).some((e) => data.marks[e] < 20)
        return result ? "Fail" : "Pass";
    }
    //render the dom
    render() {
        
        const details = this.props.value? this.props.value.root: [];
      
        const maxmarks = {
            marks: 0
        }
        const detailsCopy = details.slice();

        const listData = detailsCopy.sort((a, b) => a.name > b.name).map((data) => {
            let total = data.marks['Maths'] + data.marks['English'] + data.marks['Science'];
            data['totalMarks'] = total;
            data['maxmarks'] = maxmarks;
            if (total > maxmarks.marks) {
                maxmarks.marks = total;
            }
            data['name'] = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            return data;
        });
        const listItems = listData.map((data) => (<tr key={data.rollNumber}>
            <td className={this.getFailStundent(data)}>{data.name}</td>
            <td>{data.rollNumber}</td>
            <td>{data.totalMarks}</td>
            <td>{this.getFailStundent(data)}</td>
        </tr>
        ));
        return (
            <div className="student_result">
                <table>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Roll Number</th>
                            <th>Total Marks</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>


        );

    }

}
export default List;