import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ExtraDataCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <div>Total amount of bills</div>
        <div className="ml-auto font-semibold">$250.00</div>
      </CardContent>
    </Card>
  );
}
