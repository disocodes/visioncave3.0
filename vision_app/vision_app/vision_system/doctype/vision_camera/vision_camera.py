import frappe
from frappe.model.document import Document

class VisionCamera(Document):
    def validate(self):
        if not self.stream_url:
            frappe.throw("Stream URL is required")