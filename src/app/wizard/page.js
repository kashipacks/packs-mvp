const steps = [
  'Pick a pack from the Library page.',
  'Open the pack detail page and review products.',
  'Click Download Shopify CSV and save the file.',
  'In Shopify admin, go to Products > Import.',
  'Upload the CSV and complete the import.',
  'Copy product descriptions if you want to edit product pages.',
  'Copy page text (Home, About, FAQ, and policies) into your store pages.',
  'Use the marketing kit hooks and ad texts for your first campaigns.',
  'Preview your store on mobile and desktop, then publish.',
  'Start small ad tests and track which products get sales.'
];

export default function WizardPage() {
  return (
    <main className="container" style={{ paddingTop: '1.5rem' }}>
      <h1>Beginner Shopify Wizard</h1>
      <p>Follow these simple steps to use any pack quickly.</p>
      <ol className="card" style={{ lineHeight: 1.8 }}>
        {steps.map((step) => <li key={step}>{step}</li>)}
      </ol>
    </main>
  );
}
