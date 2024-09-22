import Table from "react-bootstrap/Table";

function CoinMetrics() {
  return (
    <>
      <h3>Bitcoin (BTC) Metrics</h3>
      <Table striped bordered hover>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>MarketCap</td>
            <td></td>
          </tr>
          <tr>
            <td>All Time High</td>
            <td></td>
          </tr>
          <tr>
            <td>Volime (24h)</td>
            <td></td>
          </tr>
          <tr>
            <td>Vol / M Cap (24h)</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CoinMetrics;
