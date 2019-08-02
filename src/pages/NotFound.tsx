import { T } from "lioness";
import * as React from "react";
import { Typography } from "src/components/discours-ui/Typography";

class NotFoundPage extends React.PureComponent {
  public render() {
    return (
      <Typography>
        <T context="errorCodes.404.title" message="404!" />
      </Typography>
    );
  }
}

export default NotFoundPage;
