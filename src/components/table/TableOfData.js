import "./TableOfdata.css";
export default function TableOFData({ setStepNumber, onClick }) {
  const data = JSON.parse(localStorage.getItem("All data")) || [];

  return (
    <div className="table-container">
      {data.length == 0 ? (
        <h1 className="empty-message blod-blue">No Result</h1>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Plan Type</th>
                <th>Add-Ons Type</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{el?.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phoneNumber}</td>
                    <td>{el.planSelected.name}</td>
                    {el.selectedAddOns.map((el) => {
                      return (
                        <tr>
                          <td>{el.name}</td>
                        </tr>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <button className="table-back-btn" onClick={onClick}>Back</button>
    </div>
  );
}
