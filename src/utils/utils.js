export const setValues = (current, results) => {
    const { operational, nonOperational, dataPoints } = current;
    let op = operational;
    let nonOp = nonOperational;
    let dPoints = dataPoints;
    results.map(element => {
      if (element.OperationalStatus === "Operational"){
        op += 1;
      } else {
        nonOp += 1;
      };
      if(dPoints.length === 0){
        const obj = {
          label: element.AssetCategoryID,
          value: 1,
        }
        dPoints.push(obj);
      } else {
        const ind = dPoints.findIndex(equipment => equipment.label === element.AssetCategoryID);
        if (ind === -1){
          const obj = {
            label: element.AssetCategoryID,
            value: 1,
          };
          dPoints.push(obj);
        } else {
          const obj = {
            label : element.AssetCategoryID,
            value: dPoints[ind].value + 1,
          }
          dPoints[ind] = obj;
        }
      }
    });
    const updated = {
        operational: op,
        nonOperational: nonOp,
        dataPoints: dPoints,
    };
    
    return updated;
}