import FeaturePlaceholder from "@/components/FeaturePlaceholder";

export default function OperatorPage() {
  return (
    <FeaturePlaceholder
      title="Operator workspace"
      description="The operator workspace will provide access to authorized inventory management in a future phase."
      notice="This route is not protected and provides no operator controls. Operator authentication and server-side authorization are not implemented."
    />
  );
}
