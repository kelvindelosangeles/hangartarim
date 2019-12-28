import React from "react";

import Table from "react-bootstrap/Table";

const KapasiteTable = props => {
  switch (props.fruit) {
    case "apple":
      return (
        <Table striped bordered responsive="md">
          <tbody>
            <tr>
              <td>Odalar</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                Kapasite <sub>(Ton)</sub>
              </td>
              <td>300</td>
              <td>300</td>
              <td>450</td>
              <td>300</td>
              <td>450</td>
              <td>450</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
            </tr>
          </tbody>
        </Table>
      );
    case "grapes":
      return (
        <Table striped bordered responsive="md">
          <tbody>
            <tr>
              <td>Odalar</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                {" "}
                Kapasite <sub>(Ton)</sub>
              </td>
              <td>250</td>
              <td>250</td>
              <td>360</td>
              <td>250</td>
              <td>360</td>
              <td>360</td>
              <td>250</td>
              <td>250</td>
              <td>250</td>
              <td>250</td>
            </tr>
          </tbody>
        </Table>
      );
    case "pom":
      return (
        <Table striped bordered responsive="md">
          <tbody>
            <tr>
              <td>Odalar</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                {" "}
                Kapasite <sub>(Ton)</sub>
              </td>
              <td>300</td>
              <td>300</td>
              <td>450</td>
              <td>300</td>
              <td>450</td>
              <td>450</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
            </tr>
          </tbody>
        </Table>
      );
    case "quince":
      return (
        <Table striped bordered responsive="md">
          <tbody>
            <tr>
              <td>Odalar</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                {" "}
                Kapasite <sub>(Ton)</sub>
              </td>
              <td>300</td>
              <td>300</td>
              <td>450</td>
              <td>300</td>
              <td>450</td>
              <td>450</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
            </tr>
          </tbody>
        </Table>
      );

    default:
      return null;
  }
};

export default KapasiteTable;
