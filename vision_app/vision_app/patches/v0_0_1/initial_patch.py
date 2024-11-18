import frappe

def execute():
    """
    Initial patch to set up necessary configurations
    """
    if not frappe.db.exists('DocType', 'Vision Analytics'):
        frappe.reload_doc('vision_system', 'doctype', 'vision_analytics')
    
    if not frappe.db.exists('DocType', 'Vision Camera'):
        frappe.reload_doc('vision_system', 'doctype', 'vision_camera')