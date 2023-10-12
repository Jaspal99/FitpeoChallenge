import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Table, TableCell, TableHead, TableRow } from "@mui/material";

export default function TableContainer(){
    return (
        <div className="TableMainDiv">
            <div className="tableheader">
                <h2>Product Sell</h2>
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                <Input placeholder="Search" />
                </div>
                <div className="dropdown">
                    Last 30 days
                </div>
            </div>
            <Table>
                <TableHead>
                    <TableCell>Product</TableCell>
                    <TableCell>Stock</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total Sales</TableCell>
                </TableHead>
                    <TableRow></TableRow>
            </Table>
        </div>
    )
}