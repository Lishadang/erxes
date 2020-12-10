const carMutations = [
  {
    name: 'carsAdd',
    handler: async (_root, doc, { user, docModifier, models, checkPermission }) => {
      await checkPermission('manageCars', user);
      const car = models.Cars.createCar(models, docModifier(doc), user)

      // await putCreateLog(
      //   {
      //     type: constants.MODULE_NAMES.CAR,
      //     newData: doc,
      //     object: car,
      //   },
      //   user,
      // );

      return car;
    }
  },
  /**
   * Updates a car
   */
  {
    name: 'carsEdit',
    handler: async (_root, { _id, ...doc }, { models, checkPermission, user }) => {
      await checkPermission('manageCars', user);
      await models.Cars.getCar(models, _id);
      const updated = await models.Cars.updateCar(models, _id, doc);

      // await putUpdateLog(
      //   {
      //     type: MODULE_NAMES.COMPANY,
      //     object: car,
      //     newData: doc,
      //     updatedDocument: updated,
      //   },
      //   user,
      // );

      return updated;
    }
  },

  /**
   * Removes cars
   */
  {
    name: 'carsRemove',
    handler: async (_root, { carIds }: { carIds: string[] }, { models, checkPermission, user }) => {
      await checkPermission('manageCars', user);
      await models.Cars.find({ _id: { $in: carIds } }).lean();

      await models.Cars.removeCars(models, carIds);

      // for (const car of cars) {
      //   await putDeleteLog({ type: MODULE_NAMES.COMPANY, object: car }, user);
      // }

      return carIds;
    }
  },

  /**
   * Merge cars
   */
  {
    name: 'carsMerge',
    handler: async (_root, { carIds, carFields }, { models, checkPermission, user }) => {
      await checkPermission('manageCars', user);
      return models.Cars.mergeCars(models, carIds, carFields);
    }
  },

  /**
   * Creates a new car category
   * @param {Object} doc Car category document
   */
  {
    name: 'carCategoriesAdd',
    handler: async (_root, doc, { docModifier, models, checkPermission, user }) => {
      await checkPermission('manageCars', user);
      const carCategory = await models.CarCategories.createCarCategory(models, docModifier(doc));

      // await putCreateLog(
      //   {
      //     type: MODULE_NAMES.CAR_CATEGORY,
      //     newData: { ...doc, order: carCategory.order },
      //     object: carCategory,
      //   },
      //   user,
      // );

      return carCategory;
    }
  },

  /**
   * Edits a car category
   * @param {string} param2._id CarCategory id
   * @param {Object} param2.doc CarCategory info
   */
  {
    name: 'carCategoriesEdit',
    handler: async (_root, { _id, ...doc }, { models, checkPermission, user }) => {
      await checkPermission('manageCars', user);
      // const carCategory = await getCarCatogery(models, { _id });
      const updated = await models.CarCategories.updateCarCategory(models, _id, doc);

      // await putUpdateLog(
      //   {
      //     type: MODULE_NAMES.CAR_CATEGORY,
      //     object: carCategory,
      //     newData: doc,
      //     updatedDocument: updated,
      //   },
      //   user,
      // );

      return updated;
    }
  },

  /**
   * Removes a car category
   * @param {string} param1._id CarCategory id
   */
  {
    name: 'carCategoriesRemove',
    handler: async (_root, { _id }: { _id: string }, { models, checkPermission, user }) => {
      await checkPermission('manageCars', user);

      const removed = await models.CarCategories.removeCarCategory(models, _id);

      // await putDeleteLog({ type: MODULE_NAMES.CAR_CATEGORY, object: carCategory }, user);

      return removed;
    }
  }

]

export default carMutations;