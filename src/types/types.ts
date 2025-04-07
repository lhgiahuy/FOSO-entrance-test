type WithProduct = {
  product: string;
};

type Overview = WithProduct & {
  quantity: number;
  percent: number;
};

type Production = WithProduct & {
  quantity: number;
  actual: number;
};

type Report = {
  type: string;
  percent: number;
  quantity: number;
  fill: string;
};

type Customer = {
  customer: string;
  quantity: number;
};

type Material = {
  materialName: string;
  unit: string;
  quantity: number;
  additionalInfo: {
    none: string;
    code: string;
  };
};

export type { Material, Report, Production, Overview, Customer };
