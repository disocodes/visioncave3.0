import frappe

@frappe.whitelist()
def get_analytics():
    try:
        analytics = frappe.get_all(
            "Vision Analytics",
            fields=["total_detections", "accuracy", "processing_time"]
        )
        return analytics
    except Exception as e:
        frappe.log_error(str(e), "Vision Analytics Error")
        return None

@frappe.whitelist()
def get_camera_data():
    try:
        cameras = frappe.get_all(
            "Vision Camera",
            fields=["camera_name", "stream_url", "status"]
        )
        return cameras
    except Exception as e:
        frappe.log_error(str(e), "Camera Data Error")
        return None