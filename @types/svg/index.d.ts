declare module "*.svg" {
  const component: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  export = component;
}
