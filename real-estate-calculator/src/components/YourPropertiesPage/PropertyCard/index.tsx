import React from "react";
import { Report } from "../../types";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";

interface PropertyCardProps {
  reportId: number;
  propertyList: number[];
  setPropertyList: Function;
}

export function PropertyCard(props: PropertyCardProps): JSX.Element {
  const { reportId, propertyList, setPropertyList } = props;
  const [report, setReport] = React.useState<Report>(
    localStorage.getItem(reportId.toString())
      ? (JSON.parse(
          localStorage.getItem(reportId.toString()) ?? "{}"
        ) as Report)
      : ({} as Report)
  );
  React.useEffect(() => {
    localStorage.setItem(reportId.toString(), JSON.stringify(report));
  }, [report, reportId]);
  return (
    <div style={{ minWidth: 250 }} className="m-4">
      <Card>
        <CardContent>
          <div className="flex flex-row">
            <Typography
              sx={{ fontSize: 14 }}
              variant="h5"
              color="text.secondary"
              gutterBottom
            >
              <input
                value={report.name}
                onChange={(e) => {
                  setReport({ ...report, name: e.target.value } as Report);
                }}
              />
            </Typography>
            <Button
              size="small"
              onClick={() => {
                var array = [...propertyList]; // make a separate copy of the array
                var index = array.indexOf(reportId);
                if (index !== -1) {
                  array.splice(index, 1);
                  setPropertyList(array);
                  localStorage.removeItem(reportId.toString());
                }
              }}
              className="min-w-min justify-end"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                height="20"
                width="20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                ></path>
              </svg>
            </Button>
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Cap:{" "}
            {`${(
              (((report.building.RealMarketRentTotal -
                report.expenses.ExpensesTotal) *
                12) /
                parseFloat(report.loan.PurchasePrice)) *
              100
            ).toFixed(2)}%`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/properties/${reportId}`}>
            Open
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
