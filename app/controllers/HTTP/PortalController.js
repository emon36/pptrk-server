const response = require("../../../app/responses/Response");
const Handler = require("../../../app/errors/Handler");

const PortalService = require("../../services/PortalService");
const { list } = require("../../permissions/Permission");

module.exports = {
  portalAdd: async function (req, res) {
    try {
      const newUser = await PortalService.createPortal({
        title: req.body.title,
        domain: req.body.domain,
        image: req.body.image,
        created_by: req.nativeAuth.user,
      });
      return response.dispatch(
        "Portal Created Successfully",
        { newUser },
        res,
        201
      ); // wrap data in object to avoid confusion
    } catch (error) {
      return response.error(Handler(error), res);
    }
  },

  list: async function (req, res) {
    try {
      const portal = await PortalService.list(req);
      return response.dispatch(
        "Portal Listed Successfully",
        { portal },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },

  details: async function (req, res) {
    try {
      const portalDetails = await PortalService.details(req);
      return response.dispatch(
        "Portal Details Successfully",
        { portalDetails },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },

  update: async function (req, res) {
    try {
      const portalUpdate = await PortalService.update(req);
      return response.dispatch(
        "Portal Update Successfully",
        { portalUpdate },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },

  destroy: async function (req, res) {
    try {
      const portalDestroy = await PortalService.destroy(req);
      return response.dispatch(
        "Portal Destroy Successfully",
        { portalDestroy },
        res,
        200
      );
    } catch {
      return response.error(Handler(error), res);
    }
  },
};
