export default {
	pipelineRunning: false,

	triggerPipeline () {
		// Professional summary message for the demo
		const alertMessage = 
			"Pipeline Triggered!\n\n" +
			"Milestone: MS-2024-042\n" +
			"Client: TCS Limited\n" +
			"Amount: ₹7,50,000\n\n" +
			"Agents running:\n" +
			"✓ Data Ingestion Agent\n" +
			"✓ Validation Agent\n" +
			"✓ Invoice Generator Agent\n" +
			"✓ Approval Router Agent\n" +
			"✓ Dispatch Agent\n\n" +
			"Invoice INV-2024-001 dispatched in 58 seconds.";

		// Using the platform-native notification function
		// Options: 'info', 'success', 'warning', 'error'
		showAlert(alertMessage, 'info');
	},

	async refreshInvoiceTable () {
		await getinvoices.run();
	}
}